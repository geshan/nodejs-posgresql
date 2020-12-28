CREATE TABLE quote (
    id SERIAL PRIMARY KEY,
    quote character varying(255) NOT NULL UNIQUE,
    author character varying(255) NOT NULL,
    created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);

INSERT INTO quote (id, quote, author) VALUES 
(1, 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.', 'Bjarne Stroustrup'), 
(2, 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 'Martin Fowler'), 
(3, 'First, solve the problem. Then, write the code.', 'John Johnson'), 
(4, 'Java is to JavaScript what car is to Carpet.', 'Chris Heilmann'), 
(5, 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', 'John Woods'), 
(6, 'I''m not a great programmer; I''m just a good programmer with great habits.', 'Kent Beck'), 
(7, 'Truth can only be found in one place: the code.', 'Robert C. Martin'), 
(8, 'If you have to spend effort looking at a fragment of code and figuring out what it''s doing, then you should extract it into a function and name the function after the "what".', 'Martin Fowler'), 
(9, 'The real problem is that programmers have spent far too much time worrying about efficiency in the wrong places and at the wrong times; premature optimization is the root of all evil (or at least most of it) in programming.', 'Donald Knuth'), 
(10, 'SQL, Lisp, and Haskell are the only programming languages that I’ve seen where one spends more time thinking than typing.', 'Philip Greenspun'), 
(11, 'Deleted code is debugged code.', 'Jeff Sickel'), 
(12, 'There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies and the other way is to make it so complicated that there are no obvious deficiencies.', 'C.A.R. Hoare'), 
(13, 'Simplicity is prerequisite for reliability.', 'Edsger W. Dijkstra'), 
(14, 'There are only two hard things in Computer Science: cache invalidation and naming things.', 'Phil Karlton'), 
(15, 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight.', 'Bill Gates'), 
(16, 'Controlling complexity is the essence of computer programming.', 'Brian Kernighan'),
(17, 'The only way to learn a new programming language is by writing programs in it.', 'Dennis Ritchie');
