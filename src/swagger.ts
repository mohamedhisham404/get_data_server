import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ComponentsObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

let swaggerComponents: ComponentsObject | undefined;

export function createSwaggerDocument(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  swaggerComponents = document.components;
  return document;
}

export function getSwaggerComponents() {
  return swaggerComponents;
}
