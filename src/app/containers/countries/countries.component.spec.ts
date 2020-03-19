import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CountriesComponent } from './countries.component';
import { PlacesDropdownComponent } from '../../components/places-dropdown/places-dropdown.component';
import { FormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;
  let store: MockStore;
  const initialState = { };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesComponent, PlacesDropdownComponent ],
      imports: [
        FormsModule
      ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
    
  }));

  beforeEach(() => {
    store = TestBed.get(MockStore);
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch the action to get countries on region change', () => {

    spyOn(store, 'dispatch').and.stub();

    component.selectedRegion = {
      'name': 'Europe',
      'key': 'europe'
    };
    component.regionSelect();
    expect(store.dispatch).toHaveBeenCalled();
  });
});