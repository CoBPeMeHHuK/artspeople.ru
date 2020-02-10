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
                            @elseif($article->type == 3)
                                <div class="article__item article__largest">
                                    @elseif($article->type == 4)
                                        <div class="article__item article__largest_second">
                                            @else
                                                <div class="article__item">
                                                    @endif
                                                    <img src="{{ asset($article->img_preview) }}" class="article__img">
                                                    <div class="article__overlay">
                                                        <div class="article__overlay_container">
                                                            <div class="article__information_container">
                                                                <div class="article__title">{{ $article->title }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                @endforeach
                                            @endif
                                        </div>
                                </div>
                        </div>
