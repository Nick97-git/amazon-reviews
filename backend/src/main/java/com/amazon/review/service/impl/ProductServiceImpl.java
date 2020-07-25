package com.amazon.review.service.impl;

import com.amazon.review.exception.ProductNotFoundException;
import com.amazon.review.model.Product;
import com.amazon.review.repository.ProductRepository;
import com.amazon.review.service.ProductService;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {
    private final ProductRepository productRepository;

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> saveAll(Set<Product> products) {
        return productRepository.saveAll(products);
    }

    @Override
    public List<Product> getMostCommentedProducts(int limit, int offset) {
        PageRequest pageRequest = PageRequest.of(offset, limit);
        return productRepository.findAll(pageRequest);
    }

    @SneakyThrows
    @Override
    public Product findById(String productId) {
        Optional<Product> product = productRepository.findById(productId);
        if (product.isEmpty()) {
            throw new ProductNotFoundException("Incorrect product id!");
        }
        return product.get();
    }
}
