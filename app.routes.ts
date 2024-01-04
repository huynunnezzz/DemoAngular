import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentmanagerComponent } from './studentmanager/studentmanager.component';
import { ContactComponent } from './contact/contact.component';
import { EditstudentComponent } from './components/editstudent/editstudent.component';
import { InsertdataComponent } from './components/insertdata/insertdata.component';
import { DeletestudentComponent } from './components/deletestudent/deletestudent.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'student-manager',component:StudentmanagerComponent},
    {path:'contact',component:ContactComponent},
    {path:'edit-student/:id',component:EditstudentComponent},
    {path:'delete-student/:id',component:DeletestudentComponent},
    {path:'insert-student',component:InsertdataComponent}
];
