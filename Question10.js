//1. For a literal Object

const postLiteral = {
  postId: 123456789,
  author: {
    userId: "ugyy7gh7",
    name: "John Doe",
    profilePicture: "https://url.net/123/pic.jpg"
  },
  contentMedia: [
    { type: "image", url: "https://url.net/123/pic3.jpg" },
    { type: "video", url: "https://url.net/123/pic4.jpg" }
  ],
  engagement: {
    likes: 254,
    loves: 34,
    haha: 67,
    wow: 23,
    sad: 0,
    angry: 0,
    shares: 45,
    comments: [
      {
        commentId: "c767",
        userId: "uytutyt6",
        text: "Gojasi wa kwathu!",
        timestamp: "2025-08-04T09:15:00Z"
      },
      {
        commentId: "c768",
        userId: "yyytywe",
        text: "Looking great my dear!",
        timestamp: "2025-08-04T09:15:00Z"
      }
    ]
  },
  privacy: "public",
  createdAt: "2025-08-04T08:30:00Z",
  updatedAt: "2025-08-04T09:00:00Z",
  tags: ["Alice Wawukali", "James Wantali", "Peter Woyera"]
};

//2. For a class Object

class Post {
  constructor() {
    this.postId = 123456789;
    this.author = {
      userId: "ugyy7gh7",
      name: "John Doe",
      profilePicture: "https://url.net/123/pic.jpg"
    };
    this.contentMedia = [
      { type: "image", url: "https://url.net/123/pic3.jpg" },
      { type: "video", url: "https://url.net/123/pic4.jpg" }
    ];
    this.engagement = {
      likes: 254,
      loves: 34,
      haha: 67,
      wow: 23,
      sad: 0,
      angry: 0,
      shares: 45,
      comments: [
        {
          commentId: "c767",
          userId: "uytutyt6",
          text: "Gojasi wa kwathu!",
          timestamp: "2025-08-04T09:15:00Z"
        },
        {
          commentId: "c768",
          userId: "yyytywe",
          text: "Looking great my dear!",
          timestamp: "2025-08-04T09:15:00Z"
        }
      ]
    };
    this.privacy = "public";
    this.createdAt = "2025-08-04T08:30:00Z";
    this.updatedAt = "2025-08-04T09:00:00Z";
    this.tags = ["Alice Wawukali", "James Wantali", "Peter Woyera"];
  }
}
const postClassInstance = new Post();

// 3. For a Function Constructor 

function PostConstructor() {
  this.postId = 123456789;
  this.author = {
    userId: "ugyy7gh7",
    name: "John Doe",
    profilePicture: "https://url.net/123/pic.jpg"
  };
  this.contentMedia = [
    { type: "image", url: "https://url.net/123/pic3.jpg" },
    { type: "video", url: "https://url.net/123/pic4.jpg" }
  ];
  this.engagement = {
    likes: 254,
    loves: 34,
    haha: 67,
    wow: 23,
    sad: 0,
    angry: 0,
    shares: 45,
    comments: [
      {
        commentId: "c767",
        userId: "uytutyt6",
        text: "Gojasi wa kwathu!",
        timestamp: "2025-08-04T09:15:00Z"
      },
      {
        commentId: "c768",
        userId: "yyytywe",
        text: "Looking great my dear!",
        timestamp: "2025-08-04T09:15:00Z"
      }
    ]
  };
  this.privacy = "public";
  this.createdAt = "2025-08-04T08:30:00Z";
  this.updatedAt = "2025-08-04T09:00:00Z";
  this.tags = ["Alice Wawukali", "James Wantali", "Peter Woyera"];
}
const postFuncInstance = new PostConstructor();




//Demostrate Updating the object  ( Using our pstLiteral object)
// Add a new comment
postLiteral.engagement.comments.push({
  commentId: "c769",
  userId: "newUser123",
  text: "Amazing post!",
  timestamp: new Date().toISOString()
});

// Increment likes by 1
postLiteral.engagement.likes += 1;

// Delete one tag - remove the last tag
postLiteral.tags.pop();




//Demonstrate conversion of the object to JSON and back to JS object

// Convert JS object to JSON string (Using stringify)
const jsonString = JSON.stringify(postLiteral);
console.log("JSON string:", jsonString);

// Convert JSON string back to JS object (Using parse)
const backToObject = JSON.parse(jsonString);
console.log("JS object after parsing:", backToObject);


