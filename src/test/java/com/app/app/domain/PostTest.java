package com.app.app.domain;

import static com.app.app.domain.BlogTestSamples.*;
import static com.app.app.domain.PostTestSamples.*;
import static com.app.app.domain.TagTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.app.app.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class PostTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Post.class);
        Post post1 = getPostSample1();
        Post post2 = new Post();
        assertThat(post1).isNotEqualTo(post2);

        post2.setId(post1.getId());
        assertThat(post1).isEqualTo(post2);

        post2 = getPostSample2();
        assertThat(post1).isNotEqualTo(post2);
    }

    @Test
    void blogTest() throws Exception {
        Post post = getPostRandomSampleGenerator();
        Blog blogBack = getBlogRandomSampleGenerator();

        post.setBlog(blogBack);
        assertThat(post.getBlog()).isEqualTo(blogBack);

        post.blog(null);
        assertThat(post.getBlog()).isNull();
    }

    @Test
    void tagTest() throws Exception {
        Post post = getPostRandomSampleGenerator();
        Tag tagBack = getTagRandomSampleGenerator();

        post.addTag(tagBack);
        assertThat(post.getTags()).containsOnly(tagBack);

        post.removeTag(tagBack);
        assertThat(post.getTags()).doesNotContain(tagBack);

        post.tags(new HashSet<>(Set.of(tagBack)));
        assertThat(post.getTags()).containsOnly(tagBack);

        post.setTags(new HashSet<>());
        assertThat(post.getTags()).doesNotContain(tagBack);
    }
}
