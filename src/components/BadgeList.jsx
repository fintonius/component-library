import Badge from "./Badge"

export default function BadgeList() {
    const badgeList = [
          {shape: 'square', color: 'green'},
          {shape: 'square', color: 'red'},
          {shape: 'square', color: 'yellow'},
          {shape: 'pill', color: 'purple'},
          {shape: 'pill', color: 'pink'},
        ]
    
       const badges = badgeList.map(
        badge => <Badge shape={badge.shape} color={badge.color}>Badge </Badge>
      )
    return (
        <div className="badges">
            {badges}
        </div>
    )
}