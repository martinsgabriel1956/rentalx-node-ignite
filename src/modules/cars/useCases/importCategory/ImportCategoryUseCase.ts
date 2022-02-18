import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  execute({ file }: any) {
    console.log(file);
  }
}

export { ImportCategoryUseCase };
