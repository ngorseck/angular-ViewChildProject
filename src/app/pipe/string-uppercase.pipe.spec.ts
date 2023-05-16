import { StringUppercasePipe } from './string-uppercase.pipe';

describe('StringUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new StringUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
