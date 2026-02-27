data_environment_obscurance = [
    {
        title: "약간 가려짐",
        icon: "bleeding-eye",
        subtitle: "지각 판정에 불리점을 받습니다",
        description: "희미한 빛, 옅은 안개, 적당한 수풀 등입니다",
        reference: "PHB, pg. 183.",
        bullets: [
            "시야에 의존하는 <b>지혜(지각)</b> 판정에 불리점을 받습니다."
        ]
    },
    {
        title: "심하게 가려짐",
        icon: "lightning-tear",
        subtitle: "사실상 실명 상태입니다",
        description: "어둠, 짙은 안개, 빽빽한 수풀 등입니다",
        reference: "PHB, pg. 183.",
        bullets: [
            "심하게 가려진 지역에 있는 생물은 사실상 <b>실명 상태</b>를 겪습니다."
        ]
    }
]

data_environment_light = [
    {
        title: "밝은 빛",
        icon: "star-pupil",
        subtitle: "정상적인 시야입니다",
        description: "밝은 빛은 대부분의 생물이 정상적으로 볼 수 있게 합니다",
        reference: "PHB, pg. 183.",
        bullets: [
            "흐린 날씨도 밝은 빛을 제공하며, 횃불, 등불, 화염 및 일정 반경 내의 다른 광원도 마찬가지입니다."
        ]
    },
    {
        title: "희미한 빛",
        icon: "semi-closed-eye",
        subtitle: "약간 가려짐 상태입니다",
        description: "희미한 빛은 그림자라고도 불립니다",
        reference: "PHB, pg. 183.",
        bullets: [
            "<b>약간 가려진</b> 지역을 형성합니다.",
            "희미한 빛 지역은 보통 횃불과 같은 밝은 광원과 주변의 어둠 사이의 경계에 해당합니다.",
            "황혼과 새벽의 부드러운 빛도 희미한 빛으로 간주합니다. 특히 밝은 보름달은 대지를 희미한 빛으로 비출 수 있습니다."
        ]
    },
    {
        title: "어둠",
        icon: "worried-eyes",
        subtitle: "심하게 가려짐 상태입니다",
        description: "어둠은 심하게 가려진 지역을 만듭니다",
        reference: "PHB, pg. 183.",
        bullets: [
            "<b>심하게 가려진</b> 지역을 형성합니다.",
            "야외의 밤(대부분의 달빛이 있는 밤 포함), 빛이 없는 던전 내부나 지하 금고, 또는 마법적 어둠 지역에서 어둠을 마주하게 됩니다."
        ]
    }
]

data_environment_vision = [
    {
        title: "맹시",
        icon: "one-eyed",
        subtitle: "시야 없이 인지합니다",
        description: "일정 반경 내에서 시야에 의존하지 않고 주변을 인지합니다",
        reference: "PHB, pg. 183.",
        bullets: [
            "슬라임과 같이 눈이 없는 생물이나, 박쥐나 진정한 드래곤처럼 반향정위나 발달된 감각을 지닌 생물이 이 감각을 지닙니다."
        ]
    },
    {
        title: "암시야",
        icon: "semi-closed-eye",
        subtitle: "어둠에서 제한적으로 볼 수 있습니다",
        description: "암시야를 지닌 생물은 일정 반경 내에서 어둠이나 희미한 빛 속에서 더 잘 볼 수 있습니다",
        reference: "PHB, pgs. 183-184.",
        bullets: [
            "명시된 범위 내에서 암시야를 지닌 생물은 <b>어둠을 희미한 빛처럼 볼 수 있습니다</b>. 따라서 해당 생물에게 어둠 지역은 약간 가려진 것으로만 간주됩니다.",
            "그러나 어둠 속에서는 색을 구별할 수 없으며, 회색 음영만 볼 수 있습니다.",
            "D&D 세계의 많은 생물, 특히 지하에 거주하는 생물은 암시야를 지닙니다."
        ]
    },
    {
        title: "진시야",
        icon: "eye-shield",
        subtitle: "어둠 속에서도 봅니다",
        description: "진시야를 지닌 생물은 환경과 무관하게 사물의 진정한 모습을 볼 수 있습니다",
        reference: "PHB, pg. 184.",
        bullets: [
            "진시야를 지닌 생물은 일정 범위 내에서 일반적 및 마법적 어둠을 꿰뚫어 보고, 투명한 생물과 물체를 보며, 시각적 환영을 자동으로 간파하고 이에 대한 내성 굴림에 자동으로 성공하며, 형태변환자나 마법으로 변형된 생물의 본래 모습을 인지합니다.",
            "또한, 에테르 차원을 볼 수 있습니다."
        ]
    }
]

data_environment_cover = [
    {
        title: "엄폐 (절반)",
        icon: "broken-shield",
        subtitle: "낮은 벽, 가구, 생물 등입니다",
        description: "장애물이 대상의 몸의 절반 이상을 가리면 절반 엄폐를 얻습니다",
        reference: "PHB, pg. 196.",
        bullets: [
            "장애물은 낮은 벽, 큰 가구, 가는 나무줄기, 또는 적이든 아군이든 하나의 생물일 수 있습니다.",
            "절반 엄폐를 가진 대상은 <b>AC와 민첩 내성 굴림에 +2 보너스</b>를 받습니다.",
            "여러 엄폐 요소 뒤에 있다면, 가장 높은 단계의 엄폐만 적용됩니다."
        ]
    },
    {
        title: "엄폐 (4분의 3)",
        icon: "cracked-shield",
        subtitle: "쇠창살문, 화살 구멍 등입니다",
        description: "장애물이 대상의 약 4분의 3을 가리면 4분의 3 엄폐를 얻습니다",
        reference: "PHB, pg. 196.",
        bullets: [
            "장애물은 쇠창살문, 화살 구멍, 또는 두꺼운 나무줄기일 수 있습니다.",
            "4분의 3 엄폐를 가진 대상은 <b>AC와 민첩 내성 굴림에 +5 보너스</b>를 받습니다.",
            "여러 엄폐 요소 뒤에 있다면, 가장 높은 단계의 엄폐만 적용됩니다."
        ]
    },
    {
        title: "완전 엄폐",
        icon: "shield",
        subtitle: "완전히 가려졌습니다",
        description: "장애물에 의해 완전히 가려지면 완전 엄폐를 얻습니다",
        reference: "PHB, pg. 196.",
        bullets: [
            "완전 엄폐를 가진 대상은 <b>직접적으로 공격이나 주문의 대상이 될 수 없습니다</b>. 다만 일부 주문은 범위 효과에 포함시켜 영향을 줄 수 있습니다.",
            "여러 엄폐 요소 뒤에 있다면, 가장 높은 단계의 엄폐만 적용됩니다."
        ]
    }
]
