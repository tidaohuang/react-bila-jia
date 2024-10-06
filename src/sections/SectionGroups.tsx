import SvgQueen from "../icons/SvgQueen";
import SvgHappy from "../icons/SvgHappy";
import SvgNature from "../icons/SvgNature";
import GroupCard, { GroupProps } from "./group/GroupCard";
import SvgHeart from "../icons/SvgHeart";
import SvgGift from "../icons/SvgGift";
import SvgStone from "../icons/SvgStone";
import SvgGather from "../icons/SvgGather";
import SvgCouple from "../icons/SvgCouple";
import SvgStudent from "../icons/SvgStudent";
import SvgDictionary from "../icons/SvgDictionary";
import SvgSeedling from "../icons/SvgSeedling";
import SvgStar from "../icons/SvgStar";


export default function SectionGroups() {


    const groups: GroupProps[] = [
        {
            title: '喜樂小組',
            color: "primary",
            svg: < SvgHappy />,
            target: "弟兄",
            time: '每週三上午10:00',
            leader: "林牧師",
            location: "教會一樓"
        },
        {
            title: '新生命小組',
            color: 'secondary',
            svg: < SvgNature />,
            target: "姐妹",
            time: '每週三上午10:00',
            leader: "林師母",
            location: "教會大教室"
        },
        {
            title: '以斯帖小組',
            color: 'warning',
            svg: < SvgQueen />,
            target: "姐妹",
            time: '單數週的週五晚上7:30',
            leader: "林師母",
            location: "線上聚會"
        },
        {
            title: '雅歌小組',
            color: 'orange',
            svg: < SvgHeart />,
            target: "夫妻/弟兄/姐妹",
            time: '每個月1-2次週六下午2:00',
            leader: "張瑞文&蕭麗芬夫婦",
            location: "教會露臺"
        },
        {
            title: '恩惠小組',
            color: 'info',
            svg: < SvgGift />,
            target: "社青夫妻/弟兄/姐妹",
            time: '主日會後11:30',
            leader: "楊中玉&徐碧岑夫婦",
            location: "教會大堂"
        },
        {
            title: '基石小組',
            color: 'success',
            svg: < SvgStone />,
            target: "弟兄",
            time: '主日會後11:30',
            leader: "楊春明",
            location: "教會大堂"
        },
        {
            title: '恩寵小組',
            color: 'primary',
            svg: < SvgGather />,
            target: "姐妹",
            time: '每周一晚上8:00',
            leader: "劉麗真",
            location: "線上聚會"
        },
        {
            title: '擁抱小組',
            color: 'secondary',
            svg: < SvgCouple />,
            target: "姐妹",
            time: '每個月1-2次(周間白天)',
            leader: "葉錦蓉",
            location: "教會大教室"
        },
        {
            title: '學青提摩太小組',
            color: 'warning',
            svg: < SvgStudent />,
            target: "20-30歲學生/青年",
            time: '每個月一次主日會後11:30',
            leader: "林敬倫",
            location: "教會大堂"
        },
        {
            title: '英文查經小組',
            color: 'orange',
            svg: < SvgDictionary />,
            target: "弟兄/姐妹",
            time: '每個月一次週六晚上7:00',
            leader: "TERRIE老師",
            location: "教會大教室"
        },
        {
            title: '青少年愛子團契',
            color: 'info',
            svg: < SvgSeedling />,
            target: "國中/高中學生",
            time: '每週六晚上7:00',
            leader: "張光予&吳易軒",
            location: "教會大教室"
        },
        {
            title: '兒童主日學',
            color: 'success',
            svg: < SvgStar />,
            target: "國小學生",
            time: '每週主日10:00',
            leader: "林師母",
            location: "教會兒主教室"
        },
    ]


    return (
        <section className="section bg-light" id="groups">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                    <div className="flex-fill">
                        <h3 className="fw-semibold mb-0">教會小組介紹</h3>
                        <p className="text-muted mb-0 fs-6">邀請您參加小組，建立肢體關係</p>
                    </div>
                </div>
                <div className="row text-start">
                    {groups.map((group, index) => (
                        <div className="col-12 col-md-4 col-xl-2" key={index}>
                            <GroupCard
                                title={group.title}
                                color={group.color}
                                svg={group.svg}
                                target={group.target}
                                time={group.time}
                                leader={group.leader}
                                location={group.location}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}