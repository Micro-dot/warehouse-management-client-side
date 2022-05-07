import React from 'react';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blog'>
                <h3>Difference between Node.JS and Javascript ?</h3>
                <p>JavaScript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. On the other hand, Node.js usually represents a list of objects and methods accessible to JavaScript code when run in the V8 engine or via the node interpreter.</p> 
                <p>Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. </p>
            </div>

            <div className='blog'>
                <h3>Differences between sql and nosql databases?</h3>
                <p>SQL: Structured Query Language or SQL is a table-based relational database. By applying the SQL programming language, users can now search, insert, modify and delete data from the database records. This in no way limits the use of SQL. The services it supports are also not limited to the optimization or administration of the database.</p>
                <p>NoSQL: NoSQL is a non-relational database or DMS without any fixed schema, while it is easy to scale. Distributed data stores that require a large quantity of data storage needs have a call for NoSQL. Big Data and real-time web apps make use of NoSQL.</p>
            </div>

            <div className='blog'>
                <h3>When should you use nodejs and when should you use mongodb ?</h3>
                <p>MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.</p>
            </div>

            <div className='blog'>
                <h3>What is the purpose of jwt and how does it work?</h3>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. <br />
                    01. The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. For example, a typical OpenID Connect compliant web application will go through the /oauth/authorize endpoint using the authorization code flow. <br />
                    02. When the authorization is granted, the authorization server returns an access token to the application. <br />
                    03.The application uses the access token to access a protected resource (like an API).
                </p>
            </div>
        </div>
    );
};

export default Blogs;