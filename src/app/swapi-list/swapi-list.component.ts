import { Component, OnInit, ViewChild } from '@angular/core';
import { SwapiConnectionService } from '../swapi-connection.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';


const ELEMENT_DATA: SwapiConnectionService[] = [];

@Component({
  selector: 'app-swapi-list',
  templateUrl: './swapi-list.component.html',
  styleUrls: ['./swapi-list.component.css']
})

export class SwapiListComponent implements OnInit {

displayedColumns: string[] = ['select', 'name', 'diameter', 'climate', 'population']

dataSource = new MatTableDataSource(ELEMENT_DATA);

selection = new SelectionModel(true, []);

  constructor(private swApiConnectionService: SwapiConnectionService) { }

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    
    this.swApiConnectionService.getAll().subscribe(res => {
     this.dataSource = new MatTableDataSource(res.results);
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
    })}

    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
    }
  
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

  filter(filterValue: string){

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  }

}
