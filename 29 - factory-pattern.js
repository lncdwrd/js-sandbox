const MemberFactory = function() {
  this.createMember = function(name, type) {
    let member;

    switch (type) {
      case 'Simple':
        member = new SimpleMembership(name);
        break;
      case 'Standard':
        member = new StandardMembership(name);
        break;
      case 'Super':
        member = new SuperMembership(name);
        break;
      default:
        console.log('Membership not defined');
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    }

    return member;
  }
}

class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = '$5';
  }
}

class StandardMembership  {
  constructor(name) {
    this.name = name;
    this.cost = '$15';
  }
}

class SuperMembership  {
  constructor(name) {
    this.name = name;
    this.cost = '$25';
  }
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'Simple'));
members.forEach(function(member) {
  member.define();
});
