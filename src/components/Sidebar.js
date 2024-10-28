import React from 'react';
import { MdHome, MdMusicNote, MdSportsSoccer, MdVideocam, MdLiveTv, MdWatchLater, MdSchool, MdLocalMovies, MdExplore, MdSettings, MdReport, MdHelp } from 'react-icons/md';
import { FaYoutube, FaYoutubeSquare } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen); //SUBSCRIBING

  if(!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul className="border-b border-gray-300 pb-4">
        <li className="flex items-center"><MdHome className="mr-2" /> <Link to="/">Home</Link></li>
        <li className="flex items-center"><MdExplore className="mr-2" /> Shorts</li>
        <li className="flex items-center"><MdVideocam className="mr-2" /> Video</li>
        <li className="flex items-center"><MdLiveTv className="mr-2" /> Live</li>
      </ul>
      
      <h1 className="font-bold pt-5">Subscription's</h1>
      <ul className="border-b border-gray-300 pb-4">
        <li className="flex items-center"><MdMusicNote className="mr-2" /> Music</li>
        <li className="flex items-center"><MdSportsSoccer className="mr-2" /> Sports</li>
        <li className="flex items-center"><MdVideocam className="mr-2" /> Gaming</li>
        <li className="flex items-center"><MdLocalMovies className="mr-2" /> Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul className="border-b border-gray-300 pb-4">
        <li className="flex items-center"><MdWatchLater className="mr-2" /> Music</li>
        <li className="flex items-center"><MdSportsSoccer className="mr-2" /> Sports</li>
        <li className="flex items-center"><MdVideocam className="mr-2" /> Gaming</li>
        <li className="flex items-center"><MdLocalMovies className="mr-2" /> Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Explore</h1>
      <ul className="border-b border-gray-300 pb-4">
        <li className="flex items-center"><MdExplore className="mr-2" /> News</li>
        <li className="flex items-center"><MdSportsSoccer className="mr-2" /> Sports</li>
        <li className="flex items-center"><MdSchool className="mr-2" /> Learning</li>
        <li className="flex items-center"><MdSchool className="mr-2" /> Education</li>
        <li className="flex items-center"><FaYoutubeSquare className="mr-2" /> Podcasts</li>
      </ul>

      <h1 className="font-bold pt-5">More from YouTube</h1>
      <ul className="border-b border-gray-300 pb-4">
        <li className="flex items-center"><FaYoutube className="mr-2" /> YouTube Music</li>
        <li className="flex items-center"><FaYoutube className="mr-2" /> YouTube Kids</li>
        <li className="flex items-center"><FaYoutube className="mr-2" /> YouTube Gaming</li>
      </ul>

      <ul className="pt-5 border-b border-gray-300 pb-4">
        <li className="flex items-center"><MdSettings className="mr-2" /> Settings</li>
        <li className="flex items-center"><MdReport className="mr-2" /> Report</li>
        <li className="flex items-center"><MdHelp className="mr-2" /> Help</li>
      </ul>

      <p className="pt-5 text-sm">
        About Press Copyright Contact us <br />
        Creators Advertise Developers <br />
        Terms Privacy Policy & Safety <br />
        Show YouTube works Test new features
      </p>

      <h4 className="pt-5 text-sm">© 2024 Google LLC</h4>
    </div>
  );
}

export default Sidebar;

