const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
};
const forfeit = {
    late: 1.5,
    drunk: 5,
    molested: 10,
}
const bonuses = {
    'C++': 100,
    Rust: 150,
    default: 50,
};

const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
};

function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;
    this.finishTasks = 0;
    this.level = 0;

    this.addTask = () => {
        this.tasks++;
    };
    this.fine = (values) => {
        +values;
        this.salary = this.salary - values;

    }
    this.finishTask = () => {
        if (this.tasks > 0) {
            this.tasks--;
            this.salary +=
                (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
            this.finishTasks++
            user.upgrade()
        }
    };

    this.upgrade = () => {
        if (this.finishTasks > 3) {
            this.level++
            if (this.finishTasks >= 6) {
                this.grade = grades.Middle;
            }
            if (this.level >= 9) {
                this.level = 9;
                this.grade = grades.Senior;
                console.log('You have max level Senior Pomidor')
            }
        } else {
            console.log('Работай усерднее,и будет тебе повышение')
        }
    }
}

const user = new User('John', 'C++', grades.Junior);
const user1 = new User('Vasya', 'Rust', grades.Senior);
const user2 = new User('Nifertiti', 'Bu', grades.Middle);

user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();

console.log(user);

user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();

console.log(user);

user.fine(forfeit.drunk)
user.fine(forfeit.molested)
user.fine(forfeit.late)

console.log(user);