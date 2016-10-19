import { transformFileSync } from 'babel-core';
import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import plugin from '../src/index';
import expect from 'expect';

describe('index.js', () => {

  const fixtures = join(__dirname, 'fixtures');
  readdirSync(fixtures)
    .forEach(f => {
      const isOnly = f.indexOf('-only') > -1;
      const itFn = isOnly ? it.only : it;
      itFn(`should work with ${f.split('-').join(' ')}`, () => {
        const opts = {
          presets: [],
          plugins: [plugin]
        };
        const actualFile = join(fixtures, f, 'actual.js');
        const actual = transformFileSync(actualFile, opts).code;
        const expected = readFileSync(join(fixtures, f, 'expected.js'), 'utf-8');
        expect(actual).toEqual(expected);
      });
    });

});


