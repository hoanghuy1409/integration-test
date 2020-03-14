import { By } from "@angular/platform-browser";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterLinkWithHref } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";

import { NavComponent } from "./nav.component";

describe("NavComponent", () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should have a link to the todos page", () => {
    let de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    console.log(de);
    let index = de.findIndex(de => de.properties["href"] === "/todos");

    expect(index).toBeGreaterThan(-1);
  });
});
