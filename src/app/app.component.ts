/**
 * This component represents the root of the application.
 */
import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
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
    imgSrc: 'data:image/jpeg;base64,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',
    userName: 'Marry Wilson'
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
      userName: 'Marry Wilson',
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
      userName: 'Marry Wilson',
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
      userName: 'Marry Wilson',
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
      userName: 'Marry Wilson',
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
      userName: 'Marry Wilson',
      dateTime: 'Jan 24 2024, 2:15 am',
      text: 'Favorite Actress.',
      hashtags: ['#NationalQueen', '#Rashmika'],
      imgSrc: 'https://www.thestatesman.com/wp-content/uploads/2023/11/IMG_0175.jpeg',
      likes: 1000,
      comments: 200,
      shares: 50
    }
  ];
  public settingsMenuToggle(): void {
    const settingsmenu: HTMLElement | null = document.querySelector(".settings-menu");
    if (settingsmenu) {
      settingsmenu.classList.toggle("settings-menu-height");
    }
  }


  darkmode=false;

  ngOnInit(): void {
   
  }


  darkmodebtn(){

this.darkmode=!this.darkmode;

if(this.darkmode){document.body.classList.add('dark-theme')}
else{document.body.classList.remove('dark-theme')}
  

  }
}
