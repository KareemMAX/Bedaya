
var json = {
 "title": "Bedaya 2019",
 "completedHtml": "<h3>Added to Database</h3>",
 "pages": [
  {
   "name": "general",
   "elements": [
    {
     "type": "text",
     "name": "code",
     "title": "Database code",
     "isRequired": true
    },
    {
     "type": "radiogroup",
     "name": "gender",
     "title": "Gender",
     "isRequired": true,
     "choices": [
      {
       "value": "item1",
       "text": "Male"
      },
      {
       "value": "item2",
       "text": "Female"
      }
     ]
    },
    {
     "type": "dropdown",
     "name": "day",
     "title": "Day of visit",
     "isRequired": true,
     "choices": [
      "1",
      "2",
      "3",
      "4",
      "5"
     ]
    },
    {
     "type": "dropdown",
     "name": "age",
     "title": "Adult or Child",
     "isRequired": true,
     "choices": [
      {
       "value": "adult",
       "text": "Adult"
      },
      {
       "value": "child",
       "text": "Child"
      }
     ]
    }
   ],
   "title": "General"
  },
  {
   "name": "details",
   "elements": [
    {
     "type": "text",
     "name": "house",
     "title": "House Number"
    },
    {
     "type": "text",
     "name": "name",
     "title": "Name",
     "isRequired": true
    }
   ],
   "visibleIf": "{age} = \"adult\"",
   "title": "Adult details"
  },
  {
   "name": "child_clinc",
   "elements": [
    {
     "type": "radiogroup",
     "name": "clinc",
     "title": "Clinc",
     "isRequired": true,
     "choices": [
      "1",
      "2"
     ]
    }
   ],
   "visibleIf": "{age} = \"child\"",
   "title": "Paediatric Clinics"
  }
 ]
}
;

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});;
