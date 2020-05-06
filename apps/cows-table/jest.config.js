module.exports = {
  name: 'cows-table',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/cows-table',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
