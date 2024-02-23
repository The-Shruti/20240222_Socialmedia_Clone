/**
 * This component represents the root of the application.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Title of the social media clone application
  title = 'socialmedia clone';

  // Array of shortcuts displayed in the application
  shortcuts: { img: string; title: string }[] = [
    // Shortcut 1
    {
      img: "https://i.postimg.cc/3JHVf7vG/shortcut-1.png",
      title: 'Full Stack Developer',
    },
    // Shortcut 2
    {
      img: 'https://i.postimg.cc/rFCbvb1P/shortcut-2.png',
      title: 'Web Developer Course',
    },
    // Shortcut 3
    {
      img: 'https://i.postimg.cc/0yk3xfZ2/shortcut-3.png',
      title: 'Java Developer',
    },
    // Shortcut 4
    {
      img: 'https://i.postimg.cc/Z5wQqdDP/shortcut-4.png',
      title: 'Python Developer',
    },
  ];

  // Array of events displayed in the application
  events: { day: string; month: string; title: string; location: string; moreInfo: string }[] = [
    // Event 1
    {
      day: "26",
      month: "June",
      title: "B. Praak Concert",
      location: "Willson Tech Park",
      moreInfo: "#"
    },
    // Event 2
    {
      day: "12",
      month: "August",
      title: "Open Mic",
      location: "Hitech City,Hyd",
      moreInfo: "#"
    }
  ];

  // Array of online members displayed in the application
  onlineMembers: { imgSrc: string; firstName: string; lastName: string; status: string }[] = [
    // Online member 1
    {
      imgSrc: 'https://i.postimg.cc/XNPtfdVs/member-1.png',
      firstName: 'Alison',
      lastName: 'Mina',
      status: 'Online'
    },
    // Online member 2
    {
      imgSrc: 'https://i.postimg.cc/4NhqByys/member-2.png',
      firstName: 'Jackson',
      lastName: 'Aston',
      status: 'Online'
    },
    // Offline member
    {
      imgSrc: 'https://i.postimg.cc/FH5qqvkc/member-3.png',
      firstName: 'Samona',
      lastName: 'Rose',
      status: 'Offline'
    },
    // Online member 3
    {
      imgSrc: 'https://i.postimg.cc/Sx65bPcP/member-4.png',
      firstName: 'Mike',
      lastName: 'Pérez',
      status: 'Online'
    }
  ];

  // Array of stories displayed in the application
  stories: { imgSrc: string; story: string }[] = [
    // Story 1
    {
      imgSrc: 'https://i.postimg.cc/TPh453Zz/upload.png',
      story: 'Post Story'
    },
    // Story 2
    {
      imgSrc: 'https://i.postimg.cc/XNPtfdVs/member-1.png',
      story: 'Rohit'
    },
    // Story 3
    {
      imgSrc: 'https://i.postimg.cc/4NhqByys/member-2.png',
      story: 'Anaya'
    },
    // Story 4
    {
      imgSrc: 'https://i.postimg.cc/FH5qqvkc/member-3.png',
      story: 'Ovi'
    },
    // Story 5
    {
      imgSrc: 'https://i.postimg.cc/Sx65bPcP/member-4.png',
      story: 'Aisha'
    }
  ];

  // User profile information
  userProfile = {
    imgSrc: 'https://i.postimg.cc/cHg22LhR/profile-pic.png',
    userName: 'John Nicholson'
  };

  // Array of links for post inputs
  postInputLinks = [
    { iconSrc: 'https://i.postimg.cc/QMD2BDXs/live-video.png', text: 'Live Video' },
    { iconSrc: 'https://i.postimg.cc/6pKKZn0D/photo.png', text: 'Photo/Video' },
    { iconSrc: 'https://i.postimg.cc/Pf6TBCdD/feeling.png', text: 'Feeling/Activity' }
  ];

  // Placeholder text for post input
  postInputPlaceholder = "What's on your mind, " + this.userProfile.userName.split(' ')[0] + "?";

  // Array of posts displayed in the application
  posts: { userName: string; dateTime: string; text: string; hashtags: string[], imgSrc: string, likes: number; comments: number, shares: number }[] = [
    // Post 1
    {
      userName: 'John Nicholson',
      dateTime: 'Jan 24 2020, 13:40 pm',
      text: 'Anything is paw-sible with a dog by your side.',
      hashtags: ['#Live', '#Love', '#Cuddle'],
      imgSrc: 'https://hips.hearstapps.com/hmg-prod/images/cute-baby-animals-1558535060.jpg?crop=1.00xw:0.669xh;0,0.158xh&resize=1200:*',
      likes: 120,
      comments: 45,
      shares: 20
    },
    // Post 2
    {
      userName: 'John Nicholson',
      dateTime: 'March 5 2021, 12:00 pm',
      text: 'Every green tree is far more glorious than if it were made of gold and silver',
      hashtags: ['#photooftheday', '#Greenery'],
      imgSrc: 'https://cdn.pixabay.com/photo/2018/04/06/00/25/trees-3294681_1280.jpg',
      likes: 200,
      comments: 15,
      shares: 4
    },
    // Post 3
    {
      userName: 'John Nicholson',
      dateTime: 'Oct 24 2022, 1:40 am',
      text: 'Anime is not just a show, its a lifestyle.Stay cool and embrace the otaku within.',
      hashtags: ['#Anime', '#Otaku'],
      imgSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/490a5757-54ed-4e7d-ab21-2b0dafdeba15/dge9hif-80b53e52-1a8c-4997-b031-9f0344a465d2.png/v1/fill/w_1024,h_584,q_80,strp/rainbow_drop_by_hi_anima_ayo_dge9hif-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ5MGE1NzU3LTU0ZWQtNGU3ZC1hYjIxLTJiMGRhZmRlYmExNVwvZGdlOWhpZi04MGI1M2U1Mi0xYThjLTQ5OTctYjAzMS05ZjAzNDRhNDY1ZDIucG5nIiwiaGVpZ2h0IjoiPD01ODQiLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC80OTBhNTc1Ny01NGVkLTRlN2QtYWIyMS0yYjBkYWZkZWJhMTVcL2hpLWFuaW1hLWF5by00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.n65YpfNLUsl2g7RDpzJpLefdsy_cpnIovRO8-aB3GCk',
      likes: 150,
      comments: 7,
      shares: 21
    },
    // Post 4
    {
      userName: 'John Nicholson',
      dateTime: 'Feb 24 2023, 9:54 m',
      text: 'Going to Dubai represents a different way of life.',
      hashtags: ['#DubaiViews', '#CityofDreams'],
      imgSrc: 'https://www.propertyfinder.ae/blog/wp-content/uploads/2020/01/Dubai-2.jpg.webp',
      likes: 300,
      comments: 10,
      shares: 0
    },
    // Post 5
    {
      userName: 'John Nicholson',
      dateTime: 'Jan 24 2024, 2:15 am',
      text: 'Favorite Actress.',
      hashtags: ['#NationalQueen', '#Rashmika'],
      imgSrc: 'https://www.thestatesman.com/wp-content/uploads/2023/11/IMG_0175.jpeg',
      likes: 1000,
      comments: 200,
      shares: 50
    }
  ];
}
