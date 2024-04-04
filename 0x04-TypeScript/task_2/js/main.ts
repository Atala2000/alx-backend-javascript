interface DirectorInterface {
    workFromHome(): string;
    getToWork(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working form home";
    }

    workDirectorTasks(): string {
        return "Getting a coffee break";
    }

    getToWork() {
        return "Working from home";
    }
}


class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): (Director | Teacher) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

function isDirector(employee: any): employee is Director{
    return employee instanceof Director;
}

function executeWork(employee: (Director | Teacher)) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

type Subjects = 'Math' | 'History';

function teachClass(todaysClass: Subjects) {
        if (todaysClass === 'Math') {
            return 'Teaching Math'
        }
        return 'Teaching History';
}

console.log(teachClass('History'))
console.log(teachClass('Math'))
