interface FileSystem {
  [key: string]: {
    type: 'file' | 'directory';
    content?: string;
    children?: FileSystem;
  };
}

export const fileSystem: FileSystem = {
  home: {
    type: 'directory',
    children: {
      'welcome.txt': {
        type: 'file',
        content: 'Welcome to Cyber Sentinels Terminal!\nType "help" to see available commands.'
      },
      documents: {
        type: 'directory',
        children: {
          'security-tips.txt': {
            type: 'file',
            content: '1. Use strong passwords\n2. Enable 2FA\n3. Keep software updated'
          }
        }
      },
      projects: {
        type: 'directory',
        children: {
          'ctf-challenges': {
            type: 'directory',
            children: {}
          }
        }
      }
    }
  }
};

export interface Command {
  name: string;
  description: string;
  execute: (args: string[], currentPath: string[]) => string;
}

export const commands: Command[] = [
  {
    name: 'help',
    description: 'List all available commands',
    execute: () => {
      return commands
        .map(cmd => `${cmd.name.padEnd(15)} - ${cmd.description}`)
        .join('\n');
    }
  },
  {
    name: 'ls',
    description: 'List directory contents',
    execute: (args, currentPath) => {
      let dir = getCurrentDirectory(fileSystem, currentPath);
      if (!dir || dir.type !== 'directory') return 'Invalid directory';
      
      return Object.entries(dir.children || {})
        .map(([name, item]) => `${item.type === 'directory' ? '[DIR] ' : ''}${name}`)
        .join('\n');
    }
  },
  {
    name: 'cd',
    description: 'Change directory',
    execute: (args, currentPath) => {
      if (!args[0]) return 'Usage: cd <directory>';
      // Implementation would update current path
      return `Changed directory to ${args[0]}`;
    }
  },
  {
    name: 'cat',
    description: 'Display file contents',
    execute: (args, currentPath) => {
      if (!args[0]) return 'Usage: cat <filename>';
      let dir = getCurrentDirectory(fileSystem, currentPath);
      if (!dir || !dir.children?.[args[0]] || dir.children[args[0]].type !== 'file') {
        return 'File not found';
      }
      return dir.children[args[0]].content || '';
    }
  },
  {
    name: 'pwd',
    description: 'Print working directory',
    execute: (args, currentPath) => {
      return '/' + currentPath.join('/');
    }
  },
  {
    name: 'clear',
    description: 'Clear the terminal screen',
    execute: () => ''
  }
];

function getCurrentDirectory(fs: FileSystem, path: string[]): FileSystem[string] | null {
  let current = fs;
  for (const segment of path) {
    if (!current[segment] || current[segment].type !== 'directory') return null;
    current = current[segment].children!;
  }
  return current;
}