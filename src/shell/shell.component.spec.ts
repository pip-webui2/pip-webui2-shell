import { TestBed, async } from '@angular/core/testing';

import { PipShellComponent } from './shell.component';

describe('PipTestComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipShellComponent
      ],
    }).compileComponents();
  }));

  it('should create the shell', async(() => {
    const fixture = TestBed.createComponent(PipShellComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as text ''`, async(() => {
    const fixture = TestBed.createComponent(PipShellComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.text).toEqual('This is a shell component');
  }));

  it('should render text in a div tag', async(() => {
    const fixture = TestBed.createComponent(PipShellComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('This is a shell component');
  }));
});
