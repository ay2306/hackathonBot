# hackathonBot
This is backend code for bot where all hackathon organisers can organise hackathons

## How to use: 

*Base URL* : ```URL/api```

### Getting Data (GET REQUESTS)

*API ADDRESS* : ```URL/api?queries```

**Possible queries are**:
  Different parameters allowed
  1 type(mandatory)
    i. hackathons (details for hackathon(s))
      Further options available are:
      a. name : String (Returns details with certain name)
      b. id: ObjectID (Return details of hackathon with specific id)
      c. active: true or false (Return list of all hackathons that are currently active)
      d. activeIn: integer (for time in minutes) (Return list of hackathons those will be active in value hours)
    ii. teams (details for hackathon(s))
      Further options available are:
      a. name :String (Returns details with certain name)
      b. id: ObjectID (Return details of hackathon with specific id)
      c. activeEvents: integer (returns list of currently active or to be active in time(minutes) for given team){a or b are required for this one}
    iii. users
      Further options available are:
      a. name :String (Returns details with certain name)
      b. id: ObjectID (Return details of hackathon with specific id)
      c. activeEvents: integer (returns list of currently active or to be active in time(minutes) for given user){a or b are required for this one}
  
    * 
