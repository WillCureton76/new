import { z } from "zod";
import { ProviderRegistry } from "./registry.js";

export class Provider {
  id: string;
  name: string;
  description: string;
  schema: z.ZodObject<any>;
  registry: ProviderRegistry;

  constructor(
    id: string,
    name: string,
    description: string,
    schema: z.ZodObject<any>,
    registry: ProviderRegistry
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.schema = schema;
    this.registry = registry;
  }

  async callTool(input: any): Promise<any> {
    return await this.registry.execute(this.id, input);
  }
}
