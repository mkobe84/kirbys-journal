import { Component } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  public subject:string = "";
  public journal:string = "";
  public date:string = "";
  public entries = new Array();
  public bmEntries = new Array();
  public showEntries:boolean = false;
  public bookmarked:boolean = false;

  ngOnInit(): void {
    document.getElementById("hidden")?.click();
  }

  setEntriesBool(){
    this.showEntries = true;
  }
  saveEntry(){
    this.date = document.getElementsByTagName("input")[0].value;
    this.subject = document.getElementsByTagName("input")[1].value;
    this.journal = document.getElementsByTagName("textarea")[0].value;
    if (this.subject.length != 0 && this.journal.length != 0 && this.bookmarked == false){
      let entry = new Array(this.subject,this.journal,this.date);
      this.entries.push(entry);
      console.log(this.entries);
  
      document.getElementsByTagName("input")[1].value = "";
      document.getElementsByTagName("textarea")[0].value = "";
      this.bookmarked = false;
    }
    else if (this.subject.length != 0 && this.journal.length != 0 && this.bookmarked == true){
      let bmEntry = new Array(this.subject,this.journal,this.date);
      this.bmEntries.push(bmEntry);
      console.log(this.bmEntries);
  
      document.getElementsByTagName("input")[1].value = "";
      document.getElementsByTagName("textarea")[0].value = "";
      this.bookmarked = false;
    }
  }
  hideEntries(){
    this.showEntries = false;
  }

  dateClick() {
    const dateInput = document.querySelector("input");
    if (dateInput) {
      dateInput.showPicker();
    }
  }
  bookmarkBool(){
    if(this.bookmarked) {
      this.bookmarked = false;
    } else {
      this.bookmarked = true;
    }
  }

}
