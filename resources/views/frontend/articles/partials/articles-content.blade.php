<div class="content">
    <div class="wrapper">
        <div class="content__title">
            <p>Статьи и Новости</p>
        </div>

        <div class="articles_container">
            @if(count($articles) > 0)
                @foreach($articles as $article)

                    @if($article->type == 2)
                        <div class="article__item article__middle">
                            <a href="/articles/{{ $article->id }}">
                            @elseif($article->type == 3)
                                <div class="article__item article__largest">
                                    <a href="/articles/{{ $article->id }}">
                                    @elseif($article->type == 4)
                                        <div class="article__item article__largest_second">
                                            <a href="/articles/{{ $article->id }}">
                                            @else
                                                <div class="article__item">
                                                    @endif
                                                        <img src="{{ asset("https://357319.selcdn.ru/artspeople/".$article->image->type.'/'.$article->image->src) }}" class="article__img">
                                                    <a href="/articles/{{ $article->id }}">
                                                    <div class="article__overlay">
                                                        <div class="article__overlay_container">
                                                            <div class="article__information_container">
                                                                <div class="article__title">{{ $article->title }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    </a>
                                                </div>
                                                @endforeach
                                            @endif
                                        </div>
                                </div>
                        </div>
