import "../Profile/ProfileScss/Profile.scss"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Profile() {
    return (
        <>
            <div className="profile-wrapper d-flex">
                <div className="profile-sidebar col-3">
                    <div className="title-group">
                        <div className="title">
                            <p>FUNNY FACE</p>
                            <div className="bar">
                                <img src="./images/profile/icon-bar-sidebar.png"/>
                            </div>
                        </div>
                        <div className="sidebar-main">
                            <div className="search-box">
                                <button>
                                    <img src="./images/profile/search-normal.png"/>
                                </button>
                                <input
                                    type="text"
                                    placeholder="Search"
                                />
                            </div>
                            <div className="menu">
                                <div className="menu-items">
                                    <img src="./images/profile/icon-home.png"/>
                                    <p>Home</p>
                                </div>
                                <div className="menu-items">
                                    <img src="./images/profile/icon-love.png"/>
                                    <p>Love</p>
                                </div>
                                <div className="menu-items">
                                    <img src="./images/profile/icon-event.png"/>
                                    <p>Events</p>
                                </div>
                                <div className="menu-items">
                                    <img src="./images/profile/icon-video.png"/>
                                    <p>Videos playlist</p>
                                </div>
                                <div className="menu-items">
                                    <img src="./images/profile/icon-image.png"/>
                                    <p>Images playlist</p>
                                </div>
                                <div className="menu-items">
                                    <img src="./images/profile/play-add.png"/>
                                    <p>Create your video</p>
                                </div>
                                <div className="menu-items">
                                    <img src="./images/profile/addimage.png"/>
                                    <p>Create your image</p>
                                </div>
                                <div className="menu-items">
                                    <img src="./images/profile/baby.png"/>
                                    <p>Baby generator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-footer">
                        <img src="./images/profile/message-question.png"/>
                        <p>Help & getting started</p>
                    </div>
                </div>
                <div className="profile-body col-9">
                    <div className="cover">
                        <img src="./images/profile/Rectangle 3320.png"/>
                        
                        <div className="update-image-box">
                            <img src="./images/profile/camera.png"/>
                            <p>Upload image</p>
                        </div>
                        <div className="change-cover-box d-flex">
                            <img src="./images/profile/Vector.png"/>
                            <p>Change cover</p>
                        </div>
                    </div>
                    <div className="information-profile">
                        <div className="information-profile-box">
                            <div className="information">
                                <p>@Trung Hiếu</p>
                                <div className="setting">
                                    <button>Edit profile</button>
                                    <div>
                                        <img src="./images/profile/setting-2.png"/>
                                    </div>
                                </div>
                            </div>
                            <div className="interraction">
                                <div className="interraction-items">
                                    <p>4</p>
                                    <span>events</span>
                                </div>
                                <div className="interraction-items">
                                    <p>10</p>
                                    <span>veiws</span>
                                </div>
                                <div className="interraction-items">
                                    <p>22</p>
                                    <span>comments</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="events-wrapper">
                        <div className="conntent">
                            <p>EVENTS</p>
                            <div className="event-items">
                                <div className="user-info">
                                    <div className="user">
                                        <div className="avatar-box">
                                            <img src="./images/profile/Mask group.png"/>
                                        </div>
                                        <p className="user-name">trunghieu</p>
                                    </div>
                                    <div className="extend">
                                        <img src="./images/profile/more-dot.png"/>
                                    </div>
                                </div>
                                <div className="content-event">
                                    <div className="content">
                                        <h2>FIRST DATE</h2>
                                        <p>Our first date was a mix of nervousness and excitement. We shared stories, laughed, and felt a growing connection</p>
                                        <div className="iteraction-content-event">
                                            <div className="items">
                                                <img src="./images/profile/comment.png"/>
                                                <p>15</p>
                                            </div>
                                            <div className="items">
                                                <img src="./images/profile/carbon_view-filled.png"/>
                                                <p>2.3</p>
                                                <span>k</span>
                                            </div>
                                        </div>
                                        <div className="date">
                                            <p>12/10/2023</p>
                                        </div>
                                    </div>
                                    <div className="image-content">
                                        <img src="./images/profile/image-event.png"/>
                                    </div>
                                </div>
                                <div className="interaction-event">
                                    <div className="interaction-event-items">
                                        <img src="./images/profile/messages-2.png"/>
                                        <p>Comment</p>
                                    </div>
                                    <div className="interaction-event-items">
                                        <img src="./images/profile/follow.png"/>
                                        <p>Follow</p>
                                    </div>
                                    <div className="interaction-event-items">
                                        <img src="./images/profile/share.png"/>
                                        <p>Share</p>
                                    </div>
                                </div>
                                <div className="comment-box">
                                    <div className="box-user">
                                        <img src="./images/profile/unsplash_ZHvM3XIOHoE.png"/>
                                    </div>
                                    <div className="input-comment-group">
                                        <input
                                            type="text"
                                            placeholder="Comment"
                                        />
                                        <div className="send-group">
                                            <img src="./images/profile/addimagecm.png"/>
                                            <img src="./images/profile/send.png"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="line-bottom-events"></div>
                            </div>
                            <div className="pagination-event">
                                <div className="prev not-active">
                                    <FaChevronLeft className="icon-btn-change"/>
                                </div>
                                <div className="pagination-page active-page">
                                    1
                                </div>
                                <div className="pagination-page">
                                    2
                                </div>
                                <div className="pagination-page">
                                    3
                                </div>
                                <div className="next">
                                    <FaChevronRight className="icon-btn-change"/>
                                </div>
                            </div>
                        </div>
                        <div className="comment-bar">
                            <p>COMMENTS</p>
                            <div className="comment-item-group">
                                <div className="comment-items">
                                    <div className="box-comments">
                                        <div className="avatar-users-box">
                                            <img src="./images/profile/unsplash_ZHvM3XIOHoE.png"/>
                                        </div>
                                        <div className="group-content-comment">
                                            <h2>trunghieu</h2>
                                            <p>Love is the melody that fills our days, harmonizing even the simplest of moments</p>
                                            <span className="times">12m</span>
                                        </div>
                                    </div>
                                    <div className="box-more">
                                        <img src="./images/profile/more-dots.png"/>
                                    </div>
                                </div>
                            </div>

                            <div className="pagination-event pagination-comments">
                                <div className="prev not-active">
                                    <FaChevronLeft className="icon-btn-change"/>
                                </div>
                                <div className="pagination-page active-page">
                                    1
                                </div>
                                <div className="pagination-page">
                                    2
                                </div>
                                <div className="pagination-page">
                                    3
                                </div>
                                <div className="next">
                                    <FaChevronRight className="icon-btn-change"/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}