● サーバー側では定義したバランス通りに保存するだけ。

/common/emotions/model のバランスの通りに絵文字 ID に従って保存

● クライアント側(表示時の計算) -管理画面の通常表示(ユーザー側は 0-5 になる)
入力合計値(228) 1 以上 5 以上, 10 以上, 30 以上, 70 以上, 100 以上, 250 以上, 500 以上, 750 以上, 1000 以上
グラフ上限値 0-1, 0-2, 0-3, 0-4, 0-5, 0-6, 0-7 0-8 0-9 0-10

●●● 例 1 入力累積値を按分する
————————————————————
EXCITE 25 (入力合計値の 11%) 1
HAPPY 75 (入力合計値 33%) 5
JOY 100 (入力合計値の 44%) 6
RELAX 20 (入力合計値の 8%) 1
SLACK 5 (入力合計値の 2%) 0
MEKANCHOLY 2 (入力合計値の 0.8%) 0
ANGER 1 (入力合計値の 0.4%) 0
WORRY&FEAR 0 (入力合計値の 0.0%) 0
——
入力合計値： 228
グラフ上限値 ： 6
——
44% / 7(最大指標値に 0 の分を確保するために 6 に 1 を加算) = 6.285%刻みで 0-6 のグラフ指標値を決定

    0%		-	6.285%		0
    6.285%	-	12.57%		1
    12.57%	-	18.855%		2
    18.855%	-	25.14%		3
    25.14%	-	31.425%		4
    31.425%	-	37.71%		5
    37.71%	-	43.995%		6

————————————————————

●●● 例 2 入力累積値を按分する
————————————————————
EXCITE 0 (入力合計値の 0%) 0
HAPPY 0 (入力合計値 0%) 0
JOY 0 (入力合計値の 0%) 0
RELAX 0 (入力合計値の 0%) 0
SLACK 0 (入力合計値の 0%) 0
MEKANCHOLY 2 (入力合計値の 50%) 1
ANGER 1 (入力合計値の 25%) 0
WORRY&FEAR 1 (入力合計値の 25%) 0
——
入力合計値： 4
グラフ上限値 ： 1
——
50% / 2(最大指標値に 0 の分を確保するために 1 に 1 を加算) = 25%刻みで 0-1 のグラフ指標値を決定

    0%		-	25%			0
    25%		-	50%			0
    50%		-	75%			1
    75%		-	100%		1

————————————————————

●●● 例 3 入力累積値を按分する
————————————————————
EXCITE 0 (入力合計値の 0%) 0
HAPPY 0 (入力合計値 0%) 0
JOY 0 (入力合計値の 0%) 0
RELAX 0 (入力合計値の 0%) 0
SLACK 1 (入力合計値の 100%) 1
MEKANCHOLY 0 (入力合計値の 50%) 0
ANGER 0 (入力合計値の 25%) 0
WORRY&FEAR 0 (入力合計値の 25%) 0
——
入力合計値： 1
グラフ上限値 ： 1
——
100% / 2(最大指標値に 0 の分を確保するために 1 に 1 を加算) = 50%刻みで 0-1 のグラフ指標値を決定

    0%		-	50%				0
    50%		-	100%			1

————————————————————

●●● 例 4 入力累積値を按分する
————————————————————
EXCITE 1 (入力合計値の 3.57%) 0
HAPPY 2 (入力合計値 7.14%) 1
JOY 3 (入力合計値の 10.71%) 1
RELAX 4 (入力合計値の 14.28%) 2
SLACK 5 (入力合計値の 17.85%) 2
MEKANCHOLY 6 (入力合計値の 21.42%) 3
ANGER 7 (入力合計値の 25%) 3
WORRY&FEAR 0 (入力合計値の 0%) 0
——
入力合計値： 28
グラフ上限値 ： 3
——
25% / 4(最大指標値に 0 の分を確保するために 1 に 1 を加算) = 6.25%刻みで 0-3 のグラフ指標値を決定

    0%		-	6.25%			0
    6.25%	-	12.5%			1
    12.5%	-	18.75%			2
    18.75%	-	25%				3

————————————————————

●●● 例 5 入力累積値を按分する
————————————————————
EXCITE 1234 (入力合計値の 10.17%) 2
HAPPY 2345 (入力合計値 19.34%) 5
JOY 3456 (入力合計値の 28.50%) 8
RELAX 0 (入力合計値の 0%) 0
SLACK 1 (入力合計値の 0%) 0
MEKANCHOLY 2 (入力合計値の 0%) 0
ANGER 4567 (入力合計値の 37.66%) 10
WORRY&FEAR 520 (入力合計値の 4.28%) 1
——
入力合計値： 12125
グラフ上限値 ： 10
——
37.66% / 11(最大指標値に 0 の分を確保するために 1 に 1 を加算) = 3.42%刻みで 0-10 のグラフ指標値を決定

    0%		-	3.42%			0
    3.42%	-	6.84%			1
    6.84%	-	10.26%			2
    10.26%	-	13.68%			3
    13.68%	-	17.1%			4
    17.1%		-	20.52%		5
    20.52%	-	23.94%			6
    23.94%	-	27.36%			7
    27.36%	-	30.78%			8
    30.78%	-	34.2%			9
    34.2%	-	37.62%			10

————————————————————
