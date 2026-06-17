import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router:Router
  ){}

  ngOnInit() {
      this.router.events
      .pipe(filter((event:any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.syncMenuWithRoute();
      });

      this.syncMenuWithRoute();
  }

   syncMenuWithRoute() {
    const currentUrl = this.router.url;

    this.menuList.forEach(item => {
      if (item.children) {
        item.isExpanded = item.children.some((child: any) =>
          currentUrl.startsWith('/' + child.routeLink)
        );
      }
    });
  }

     toggleMenu(selectedItem: any) {
    this.menuList.forEach(item => {
      if (item !== selectedItem && item.children) {
        item.isExpanded = false;
      }
    });

    if (selectedItem.children) {
      selectedItem.isExpanded = !selectedItem.isExpanded;
    }
  }

   onNavigate() {
    // for normal menu click
    this.menuList.forEach(item => {
      if (item.children) {
        item.isExpanded = false;
      }
    });
  }

  menuList = [
    {
      label: 'Dashboard',
      icon: 'fa-solid fa-chart-line',
      routeLink: 'dashboard'
    },
    {
      label: 'Products',
      icon: 'fa-solid fa-cubes-stacked',
      children: [
        {
          label: 'Products',
          icon: 'fa-solid fa-plus',
          routeLink: 'products'
        },
        {
          label: 'Unit Master',
          icon: 'fa-solid fa-scale-balanced',
          routeLink: 'products/unit-master'
        }
      ],
      isExpanded: false
    },
    {
      label: 'Estimate Master',
      icon: 'fa-solid fa-list',
      routeLink: 'estimate-master'
    }, 
    {
      label: 'My Estimates',
      icon: 'fa-solid fa-users',
      routeLink: 'my-estimates'
    }, 
  ];


}
