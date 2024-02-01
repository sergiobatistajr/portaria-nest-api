import { Test, TestingModule } from '@nestjs/testing';
import { VehiclesService } from './vehicles.service';

describe('VehiclesService', () => {
  let service: VehiclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiclesService],
    }).compile();

    service = module.get<VehiclesService>(VehiclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should return an array of vehicles', () => {
    const result = service.findByPlate('ABC-1234');
    expect(result).toBeInstanceOf(Array);
  });
});
