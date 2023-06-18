const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "test API",
        version: "1.0.0",
        description: " nodeJs expressJs postgres crud ",
      },
      servers: [
        {
          url: "http://localhost:3000",
          description:'development server'
        },
      ],
      components:{
        schemas:{
            chicken:{
                type:'object',
                required:['name','weight'],
                properties: {
                  name: {
                      type: 'string',
                      description: 'The chicken name'
                  },
                  birthday: {
                      type: 'string',
                      description: "The chicken's birthday"
                  },
                  weight: {
                      type: 'integer',
                      description: "The chicken's weight"
                  },
                  steps: {
                      type: 'integer',
                      description: "The chicken's number of steps"
                  },
                  isRunning: {
                    type: 'boolean',
                    description: 'whether the chicken is running or not'
                  },
                  farmyardId: {
                    type: 'integer',
                    description: 'The farmyard id that the chicken belongs to'
                  }
              },
            },
            farmyard:{
                type:'object',
                required:['name'],
                properties: {
                  name:{
                    type:'string',
                    description:"farmyard's name"
                  }
                }
            }
        },
        responses : {
            200:{
                description:'request passed with success ! ',
                contents:'application/json'

            },
            201:{
                description:'object created with success ! ',
                contents:'application/json'

            },
            404: {
                description: 'Id not found- use an already existing id',
                contents: 'application/json'
            },
            500: {
                description: ' An error occured while executing the request',
                contents: 'application/json'
            }
        },
      }
      
      
    },
    apis: ["./src/routes/*.js"],
  };

  module.exports=options;