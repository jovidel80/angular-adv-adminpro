import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

let fixture: ComponentFixture<AppComponent>;
let appComponent: AppComponent;

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(appComponent).toBeTruthy();
  });

  it('debe sumar', async () => {
    const sumar = await appComponent.sumar(4, 0);
    expect(sumar).toEqual(9);
  });
});
