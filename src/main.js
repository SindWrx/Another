import 'core-js/features/promise';
import $ from 'jquery';
require('slick-carousel');
import {cityesHorizontal, cityesVertical} from './blocks/header/cityes/cityes';
import aside from './blocks/aside/aside';
import blog from './pages/blog/blog';

cityesHorizontal();
cityesVertical();
aside();
blog();