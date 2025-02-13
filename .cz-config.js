module.exports = {
  types: [
    { value: 'feat', name: '✨ feat:     A new feature' },
    { value: 'fix', name: '🐛 fix:      A bug fix' },
    { value: 'chore', name: '🔧 chore:    Maintenance tasks' },
    { value: 'docs', name: '📝 docs:     Documentation updates' },
    { value: 'test', name: '🧪 test:     Adding or modifying tests' },
    { value: 'refactor', name: '♻️ refactor: Code restructuring' },
  ],
  scopes: [
    { name: 'category' },
    { name: 'product' },
    { name: 'design system' },
    { name: 'shared' },
    { name: 'chore' },
  ],
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 72,
  messages: {
    type: 'Select the type of change:',
    scope: 'Select the scope of this change:',
    subject: 'Write a short, descriptive commit message:',
    body: 'Provide a longer description of the change (optional):',
    breaking: '💥 List any breaking changes (leave blank if none):',
    confirmCommit: 'Are you sure you want to proceed with this commit?',
  },
};
