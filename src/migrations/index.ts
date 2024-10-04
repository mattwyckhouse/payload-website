import * as migration_20241003_205721 from './20241003_205721';

export const migrations = [
  {
    up: migration_20241003_205721.up,
    down: migration_20241003_205721.down,
    name: '20241003_205721',
  },
];
