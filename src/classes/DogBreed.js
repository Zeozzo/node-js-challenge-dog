/**
 * DogBreed Class
 *
 * Challenge A & B - Classes and Modules
 *
 * This class represents a dog breed with its attributes.
 * You need to implement the class with the following:
 *
 * Properties:
 * - id: string - The unique identifier for the breed
 * - name: string - The name of the breed
 * - description: string - A description of the breed
 * - hypoallergenic: boolean - Whether the breed is hypoallergenic
 * - life: object - { min: number, max: number } - Life span in years
 * - maleWeight: object - { min: number, max: number } - Male weight in kg
 * - femaleWeight: object - { min: number, max: number } - Female weight in kg
 *
 * Methods:
 * - constructor(data): Initialize the breed with data from the API
 * - getLifeSpan(): Returns a formatted string like "10-14 years"
 * - getMaleWeight(): Returns a formatted string like "25-35 kg"
 * - getFemaleWeight(): Returns a formatted string like "20-30 kg"
 * - isHypoallergenic(): Returns "Yes" or "No"
 * - describe(): Returns a full description string
 *
 * Static Methods:
 * - fromApiResponse(apiData): Creates a DogBreed instance from API response format
 *
 * API Response Format (for reference):
 * {
 *   "id": "uuid-here",
 *   "type": "breed",
 *   "attributes": {
 *     "name": "Breed Name",
 *     "description": "Description here",
 *     "hypoallergenic": false,
 *     "life": { "min": 10, "max": 14 },
 *     "male_weight": { "min": 25, "max": 35 },
 *     "female_weight": { "min": 20, "max": 30 }
 *   }
 * }
 */

class DogBreed {
  // It should accept a data object and set all the properties
  constructor(data) {
    this.id = data.id;
    this.type = data.type;
    this.name = data.name;
    this.description = data.description;
    this.hypoallergenic = data.hypoallergenic;
    this.life = data.life;
    this.maleWeight = data.maleWeight;
    this.femaleWeight = data.femaleWeight;
  }

  /**
   * Returns the life span as a formatted string
   * @returns {string} e.g., "10-14 years"
   */
  getLifeSpan() {
    // Should return a string in format "X-Y years"
    return `${this.life.min}-${this.life.max} years`;
  }

  /**
   * Returns the male weight range as a formatted string
   * @returns {string} e.g., "25-35 kg"
   */
  getMaleWeight() {
    // Should return a string in format "X-Y kg"
    return `${this.maleWeight.min}-${this.maleWeight.max} kg`;
  }

  /**
   * Returns the female weight range as a formatted string
   * @returns {string} e.g., "20-30 kg"
   */
  getFemaleWeight() {
    // Should return a string in format "X-Y kg"
    return `${this.femaleWeight.min}-${this.femaleWeight.max} kg`;
  }

  /**
   * Returns whether the breed is hypoallergenic as a string
   * @returns {string} "Yes" or "No"
   */
  isHypoallergenic() {
    // Should return "Yes" if hypoallergenic, "No" otherwise
    return this.hypoallergenic ? "Yes" : "No";
  }

  /**
   * Returns a full description of the breed
   * @returns {string} Full description including name, description, and stats
   */
  describe() {
    // Should return a string like:
    // "Labrador Retriever: A friendly and outgoing breed. Lives 10-14 years. Hypoallergenic: No"
    return `${this.name}: ${this.description}. Lives ${this.getLifeSpan()}. Hypoallergenic: ${this.isHypoallergenic()}`;
  }

  /**
   * Static factory method to create a DogBreed from API response format
   * @param {object} apiData - The data object from the API response
   * @returns {DogBreed} A new DogBreed instance
   */
  static fromApiResponse(apiData) {
    // TODO: Implement this static method
    // The API returns data in this format:
    // { id: "...", type: "breed", attributes: { name: "...", ... } }
    // You need to transform it to the format the constructor expects
    const data = {
      id: apiData.id,
      name: apiData.attributes.name,
      description: apiData.attributes.description,
      hypoallergenic: apiData.attributes.hypoallergenic,
      life: apiData.attributes.life,
      maleWeight: apiData.attributes.male_weight,
      femaleWeight: apiData.attributes.female_weight
     };
    return new DogBreed(data);
  }
}

export default DogBreed;
