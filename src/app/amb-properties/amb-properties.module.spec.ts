import { AmbPropertiesModule } from './amb-properties.module';

describe('AmbPropertiesModule', () => {
  let ambPropertiesModule: AmbPropertiesModule;

  beforeEach(() => {
    ambPropertiesModule = new AmbPropertiesModule();
  });

  it('should create an instance', () => {
    expect(ambPropertiesModule).toBeTruthy();
  });
});
