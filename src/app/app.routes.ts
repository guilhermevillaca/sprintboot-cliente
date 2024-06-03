import { Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProdutoComponent } from './produto/produto.component';

export const routes: Routes = [
    {path: '', component: CategoriaComponent},
    {path: 'categoria', component: CategoriaComponent},
    {path: 'produto', component: ProdutoComponent}
];
