<?php if (have_posts()) : $i = 1;
                while (have_posts()) :
                    the_post();
            ?>
                    <a href=" <?php the_permalink() ?>" target="_blank" class="img img_<?php echo $i; ?>">
                        <?php the_post_thumbnail("full") ?>
                    </a>
                    <?php
                    $i++;
                    if ($i > 14) $i = 1; ?>
                <?php endwhile; ?>
            <?php endif; ?>