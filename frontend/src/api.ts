const host = 'http://localhost:3000';

export interface DepartmentsDto {
    id: number;
    name: string;
    description: string;
}


export async function getDepartments() {
    const response = await fetch(`${host}/departments`);
    const content = (await response.json()) as DepartmentsDto[];
    return content;
}