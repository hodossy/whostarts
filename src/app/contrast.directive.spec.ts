import { ContrastDirective } from './contrast.directive';

describe('ContrastDirective', () => {
  it('should create an instance', () => {
    const directive = new ContrastDirective();
    expect(directive).toBeTruthy();
  });

  it('should select a contrasting color (black)', () => {
    const directive = new ContrastDirective();
    directive.hostBackgroundColor = 'yellow';
    directive.ngOnChanges();
    expect(directive.hostColor).toEqual('black');
  });

  it('should select a contrasting color (white)', () => {
    const directive = new ContrastDirective();
    directive.hostBackgroundColor = 'blue';
    directive.ngOnChanges();
    expect(directive.hostColor).toEqual('white');
  });
});
