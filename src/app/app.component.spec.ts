import { Router } from "@angular/router";
import { By } from "@angular/platform-browser";
import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  const fixture = TestBed.createComponent(AppComponent);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have a router outlet", () => {
    const de = fixture.debugElement.query(By.directive(Router));

    expect(de).not.toBeNull();
  });
});
