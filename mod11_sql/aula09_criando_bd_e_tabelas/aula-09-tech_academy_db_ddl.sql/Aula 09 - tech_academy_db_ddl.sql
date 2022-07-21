CREATE TABLE aluno (
    ra INTEGER NOT NULL,
    nome VARCHAR(100) UNIQUE NOT NULL,
    data_nascimento DATE NOT NULL,
    PRIMARY KEY (ra)
);
CREATE TABLE disciplina (
    codigo INTEGER AUTO_INCREMENT NOT NULL,
    nome VARCHAR(100) UNIQUE NOT NULL,
    qtde_creditos INTEGER DEFAULT 0,
    PRIMARY KEY (codigo)
);
CREATE TABLE aluno_disciplina (
    ra_aluno INTEGER,
    codigo_disciplina INTEGER,
    ano YEAR CHECK (ano > 2000),
    semestre INTEGER CHECK (semestre IN (1 , 2)),
    nota DECIMAL(4 , 2 ) DEFAULT 0,
    PRIMARY KEY (ra_aluno , codigo_disciplina , ano , semestre),
    FOREIGN KEY (ra_aluno)
        REFERENCES aluno (ra)
        ON DELETE RESTRICT,
    FOREIGN KEY (codigo_disciplina)
        REFERENCES disciplina (codigo)
        ON DELETE RESTRICT
);
CREATE TABLE curso (
    codigo INTEGER AUTO_INCREMENT,
    nome VARCHAR(100) UNIQUE NOT NULL,
    PRIMARY KEY (codigo)
);
CREATE TABLE aluno_curso (
    ra INTEGER,
    codigo_curso INTEGER,
    data_matricula DATETIME NOT NULL,
    PRIMARY KEY (ra , codigo_curso),
    FOREIGN KEY (ra)
        REFERENCES aluno (ra)
        ON DELETE RESTRICT,
    FOREIGN KEY (codigo_curso)
        REFERENCES curso (codigo)
        ON DELETE RESTRICT
);
CREATE TABLE curso_disciplina (
    codigo_curso INTEGER,
    codigo_disciplina INTEGER,
    PRIMARY KEY (codigo_curso , codigo_disciplina),
    FOREIGN KEY (codigo_curso)
        REFERENCES curso (codigo)
        ON DELETE RESTRICT ON UPDATE RESTRICT,
    FOREIGN KEY (codigo_disciplina)
        REFERENCES disciplina (codigo)
        ON DELETE RESTRICT ON UPDATE RESTRICT
);
CREATE TABLE professor (
    cpf CHAR(11),
    nome VARCHAR(100) NOT NULL UNIQUE,
    PRIMARY KEY (cpf)
);
ALTER TABLE disciplina ADD cpf_professor CHAR(11);
ALTER TABLE disciplina ADD foreign key (cpf_professor) references professor(cpf);