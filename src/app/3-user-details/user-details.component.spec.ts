/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Router, ActivatedRoute } from "@angular/router";
import { Subject, Observable, empty } from "rxjs";

import { UserDetailsComponent } from "./user-details.component";

class RouterStub {
  navigate(params) {}
}

class ActivetedRouteStub {
  // private params: Observable<any> = empty();

  private subject = new Subject<any>();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

describe("UserDetailsComponent", () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailsComponent],
      providers: [
        {
          provide: Router,
          useClass: RouterStub
        },
        {
          provide: ActivatedRoute,
          useClass: ActivetedRouteStub
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should redirect the user to the users page after saving", () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigate");

    component.save();

    expect(spy).toHaveBeenCalledWith(["users"]);
  });

  it("should navigate the user to the not found page when an invalid user id is pass", () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, "navigate");

    let route: ActivetedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ id: 0 });

    expect(spy).toHaveBeenCalledWith(["not-found"]);
  });
});
