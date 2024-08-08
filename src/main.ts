import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Obtenemos el elemento con el id 'cursor'
const cursor: HTMLElement | null = document.getElementById('cursor');

// Agregamos un evento de movimiento del mouse
document.addEventListener('mousemove', (e: MouseEvent) => {
  // Obtenemos las coordenadas del mouse
  const x: number = e.clientX;
  const y: number = e.clientY;

  // Actualizamos la posición del cursor
  if (cursor) {
    cursor.style.transform = `translate(${x - 1}px, ${y - 1}px)`;
  }
});