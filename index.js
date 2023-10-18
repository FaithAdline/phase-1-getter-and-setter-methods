// Add your Circle class here

class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    get diameter() {
      return this.radius * 2;
    }
  
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    set circumference(circumference) {
      this.radius = circumference / Math.PI / 2;
    }
  
    get area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  // Example usage
  const myCircle = new Circle(5);
  console.log('Radius:', myCircle.radius);
  console.log('Diameter:', myCircle.diameter);
  console.log('Circumference:', myCircle.circumference);
  console.log('Area:', myCircle.area);
  
  // Set new values for diameter, circumference, and area
  myCircle.diameter = 10;
  console.log('New Radius (after setting diameter):', myCircle.radius);
  
  myCircle.circumference = 31.4159;
  console.log('New Radius (after setting circumference):', myCircle.radius);
  
  myCircle.area = 78.5398;
  console.log('New Radius (after setting area):', myCircle.radius);
  