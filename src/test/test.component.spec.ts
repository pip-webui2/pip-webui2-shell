import { TestBed, async } from '@angular/core/testing';

import { PipTestComponent } from './test.component';

describe('PipTestComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PipTestComponent
      ],
    }).compileComponents();
  }));

  it('should create the test', async(() => {
    const fixture = TestBed.createComponent(PipTestComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it(`should have as text ''`, async(() => {
    const fixture = TestBed.createComponent(PipTestComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.text).toEqual('This is a test component');
  }));

  it('should render text in a div tag', async(() => {
    const fixture = TestBed.createComponent(PipTestComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').textContent).toContain('This is a test component');
  }));
});
